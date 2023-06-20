import styled from "styled-components";

interface NewButtonProps {
  label: string;
  size: "small" | "large";
  onClick?: () => void;
}

function NewButton({ label, size, onClick }: NewButtonProps) {
  return (
    <NewButtonStyle size={size} onClick={onClick}>
      <p>{label}</p>
    </NewButtonStyle>
  );
}

const NewButtonStyle = styled.button<{ size: "small" | "large" }>`
  background-color: red;
  color: whitesmoke;
  width: ${(props) => (props.size === "small" ? "75px" : "200px")};
  height: ${(props) => (props.size === "small" ? "75px" : "200px")};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default NewButton;
