import { useState, useEffect } from "react";
import "./App.css";
import Gallery from "./components/Gallery/Gallery";
import List from "./components/List/List";
import Modal from "./components/Modal/Modal";
import Upload from "./components/Upload";
import "sweetalert2/dist/sweetalert2.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { FileUploader } from "react-drag-drop-files";
import { CloudUpload } from "@mui/icons-material";
import { Button } from "@mui/material";
import Swal from "sweetalert2";
import Loading from "./components/Loading/Loading";

function App() {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);
  const [images, setImages] = useState([]);
  const [singleImage, setSingleImage] = useState({});
  const url = useSelector((state) => state.url.urlLink);
  const id = useSelector((state) => state.url.id);

  const fileTypes = ["JPG", "PNG"];
  const types = ["image/png", "image/jpeg"];

  const handleDelete = async (id) => {
    if (id) {
      console.log(id);
      try {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#9FAAC9",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
          if (result.isConfirmed) {
            const response = await axios.delete(`/api/images/${id}`);
            const filteredData = images.filter((image) => image._id !== id);
            setImages(filteredData);
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      } catch (error) {
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
      }
    }
  };

  useEffect(() => {
    const getImages = async () => {
      const response = await axios.get("/api/images");
      setImages(response.data.message);
      console.log(response.data.message);
    };
    getImages();
  }, []);

  // useEffect(() => {
  //   if (id) {
  //     const getImage = async () => {
  //       const response = await axios.get(`/api/images/${id}`);
  //       setSingleImage(response.data.message);
  //       console.log(response.data.message);
  //     };
  //     getImage();
  //   }
  // }, [id]);

  useEffect(() => {
    if (file) {
      const uploadFile = async () => {
        try {
          setLoading(true);
          const response = await axios.post(
            "https://api.cloudinary.com/v1_1/ogeobubu/image/upload",
            data
          );

          const sendData = {
            title: response.data.original_filename,
            image: response.data.url,
          };

          const postDB = await axios.post("/api/images", sendData);
          setImages([postDB.data, ...images]);
          console.log([postDB.data, ...images]);
          Swal.fire({
            icon: "success",
            title: "Success",
            text: postDB.data.message,
          });
          setFile(null);
          setLoading(false);
        } catch (error) {
          setLoading(true);
          setFile(null);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.response.data.message,
          });
          setLoading(false);
        }
      };
      uploadFile();
    }
  }, [file, data]);

  const handleChange = (file) => {
    if (file && types.includes(file.type)) {
      setFile(file);
      // const myData = {
      //   file,
      //   upload_preset: "interview",
      //   cloud_name: "ogeobubu",
      // };
      // setData(myData);

      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "interview");
      data.append("cloud_name", "ogeobubu");
      setData(data);
    } else {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please select an image file (png or jpg)",
      });
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="container">
          <div className="white">
            <h1 className="title">Upload Files</h1>
            <p className="instruction">
              Upload documents you want to share with your team.
            </p>
            <div className="dragUpload">
              <FileUploader
                handleChange={handleChange}
                name="file"
                children={
                  <div className="uploadContainer">
                    <CloudUpload
                      style={{ color: "#BEC7EB ", fontSize: "5.5rem" }}
                    />
                    <div className="cloudDescription">
                      <p>Drag & Drop your files here</p>
                    </div>
                    <div className="or">
                      <p>OR</p>
                      <Button variant="contained">Browse Files</Button>
                    </div>
                  </div>
                }
              />
            </div>

            <List images={images} handleDelete={handleDelete} />
            {/* <Upload
          file={file}
          setFile={setFile}
          setData={setData}
          data={data}
          url={url}
          setImages={setImages}
          images={images}
  /> */}
            {/*<Gallery url={url} images={images} setImages={setImages} />*/}
            {/* id && <Modal singleImage={singleImage} /> */}
          </div>
        </div>
      )}
    </>
  );
}

export default App;
