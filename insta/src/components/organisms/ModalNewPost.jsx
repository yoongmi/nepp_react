import { useRef, useState } from "react";
import styled from "styled-components";

import { Backdrop } from "../atoms/modal";
import UploadApis from "../../apis/upload";
import PostApis from "../../apis/post";

const ModalNewPost = ({ onClose }) => {
  const [content, setContent] = useState("");
  const [files, setFiles] = useState([]);
  const [previews, serPreviews] = useState([]);
  const Inputfile = useRef();

  const handleClick = () => {
    Inputfile.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFiles((prev) => [...prev, file]);

    const reader = new FileReader();
    reader.onloadend = () => {
      serPreviews((prev) => [...prev, reader.result]);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async () => {
    if (files.length === 0) return;

    const promises = files.map((file) => {
      return UploadApis.uploadImage(file);
    });
    const images = await Promise.all(promises);

    await PostApis.createPost({ content, images });
    onClose();
  };

  return (
    <>
      <Backdrop
        onClick={({ currentTarget, target }) => {
          if (currentTarget === target) onClose();
        }}
      >
        <Container>
          <Header>
            새 게시물 만들기
            <BtnSubmit onClick={handleSubmit}>게시</BtnSubmit>
          </Header>
          <Body>
            <Guide>사진과 동영상을 끌어다 넣으세요.</Guide>
            <BtnUpload onClick={handleClick}>컴퓨터에서 선택</BtnUpload>
            <InputFile
              ref={Inputfile}
              type="file"
              onChange={handleFileChange}
              accept="image/*"
            />
            {previews.map((file) => (
              <ImgPreview src={file} />
            ))}

            <Textarea
              placeholder="문구입력..."
              rows="6"
              onChange={(e) => setContent(e.target.value)}
            />
          </Body>
        </Container>
      </Backdrop>
    </>
  );
};

const Container = styled.div`
  max-width: 700px;
  width: 70%;
  height: 70%;
  background: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;
const Header = styled.div`
  position: relative;
  height: 42px;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;
const BtnSubmit = styled.button`
  position: absolute;
  right: 10px;
  top: 13px;
  background-color: transparent;
  border: 0 none;
  font-size: 16px;
`;
const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1 0 0;
  padding: 20px;
`;
const Guide = styled.span``;
const BtnUpload = styled.button`
  padding: 5px 10px;
  background-color: #0095f6;
  border: 0 none;
  color: #fff;
  font-size: 16px;
  border-radius: 2px;
  margin-top: 10px;
  line-height: 1.2;
  &:active {
    background-color: #36abf7;
  }
`;
const InputFile = styled.input`
  display: none;
`;
const ImgPreview = styled.img`
  width: 100%;
`;
const Textarea = styled.textarea`
  width: 100%;
  margin: 20px;
  box-sizing: border-box;
  background-color: #eee;
  border: 0 none;
  resize: none;
  padding: 10px;
  font-size: 15px;
  border-radius: 5px;
`;

export default ModalNewPost;
