import styled from 'styled-components';

export const CardWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 300px;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
`;

export const MoviePoster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

export const Title = styled.h3`
  color: white;
  text-align: center;
  padding: 10px;
`;