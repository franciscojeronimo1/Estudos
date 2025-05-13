import {render, screen, fireEvent} from '@testing-library/react'
import App from './App';
import "@testing-library/jest-dom"



describe('App component', () => {


  it('should heading h1 have corret text', () => {
    render(<App/>)

    const headingElement = screen.getByRole("heading", { level : 1})

    expect(headingElement).toHaveTextContent("Sujeito Catau")
    expect(headingElement).toHaveClass("titulo")


  });

  it('should change message on button  click', () => {
    render(<App/>)
    const buttonElement = screen.getByText("Alterar menssagem")
    
    fireEvent.click(buttonElement)
    screen.getByText("Estudando testes com reactjs")

    const oldMessage = screen.queryByText("Bem vindo ao projeto!")
    expect(oldMessage).not.toBeInTheDocument()
  });
  
  

});


export default {}