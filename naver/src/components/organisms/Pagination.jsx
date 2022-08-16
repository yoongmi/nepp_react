import styled, { css } from "styled-components";

const pagination = ({ nowPage, total, onChange }) => {
  const display = 10;
  const last = Math.ceil(total / display);
  const btnLength = 5;
  const start = Math.ceil(nowPage / 10) * btnLength - (btnLength - 1);
  const end = start + btnLength - 1 > last ? last : start + btnLength - 1;

  const pages = [];
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return (
    <Container>
      {nowPage > 1 && (
        <BtnPage onClick={() => onChange(nowPage - 1)}>{"<"}</BtnPage>
      )}

      {pages.map((page) => (
        <BtnPage
          active={page === nowPage}
          key={page}
          onClick={() => onChange(page)}
        >
          {page}
        </BtnPage>
      ))}
      {nowPage < last && (
        <BtnPage onClick={() => onChange(nowPage + 1)}>{">"}</BtnPage>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;
const BtnPage = styled.button`
  background-color: #ecf1ff;
  color: #3f6bcc;
  border: none;
  width: 30px;
  height: 30px;
  cursor: pointer;
  ${({ active }) =>
    active &&
    css`
      background: #3f6bcc;
      color: #ecf1ff;
    `}

  & + & {
    margin-left: 5px;
  }
`;

export default pagination;
