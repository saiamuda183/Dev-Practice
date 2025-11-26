import styled from "styled-components";

const StyledHealthCheckerWrapper = styled.div`
  margin: 0 auto;
  padding: 1.5rem;
  background-color: var(--surface-default, #fff);
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
  box-sizing: border-box;

  h2 {
    color: var(--text-heading, #1a1a1a);
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  label {
    font-weight: 500;
    color: var(--text-label, #333);
  }

  input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid var(--border-default, #ccc);
    border-radius: 4px;
    margin-top: 0.25rem;
    margin-bottom: 1rem;
  }

  button {
    background-color: var(--primary-default, #0052cc);
    color: var(--text-inverse, #fff);
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: var(--primary-hover, #003d99);
    }
  }
`;

export default StyledHealthCheckerWrapper;
