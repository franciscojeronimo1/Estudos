
import { fireEvent, render, screen} from '@testing-library/react'
import { User } from '.';
import "@testing-library/jest-dom"

describe('User component', () => {

  it('should check if the name is not displayerd when component is mounted', () => {
    render(<User/>)

    const message = screen.queryByText("Usuário online: Matheus Fraga")
    expect(message).not.toBeInTheDocument()
  });
  


 it('Should display the name after typing in the input and click on the button', () => {
  render(<User/>)
  const input = screen.getByPlaceholderText("Digite o nome")
  const button = screen.getByRole("button", { name: "cadastrar"})

  fireEvent.change(input, {target: {value: "Matheus Fraga"}})
  fireEvent.click(button)

  const message = screen.getByText("Usuário online: Matheus Fraga")

  expect(message).toBeInTheDocument()
 });
 
});

export default {}