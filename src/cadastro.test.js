import Cadastro from "./cadastro"
import { render, screen, fireEvent } from '@testing-library/react-native'
describe('teste de cadastro de usuário', ()=>{
    it('Renderiza botão salvar', () =>{
       const { getByTestId } = render(<Cadastro />)
       expect(getByTestId('id-salvar')).toBeTruthy()
    })

    it('Renderiza rotulo email', () =>{
       render(<Cadastro />)
       const emailLabel = screen.getByTestId('id-email')
       expect(emailLabel).toBeTruthy()
       expect(emailLabel.props.children).toEqual('Informe seu email')
     })

     it('Atualiza estado ao digitar email', () =>{
        render(<Cadastro />)
        const inputEmail = screen.getByTestId('id-input-email')
        expect(inputEmail).toBeTruthy()        
        fireEvent.changeText(inputEmail, 'vilsonmoro@gmail.com') 
        expect(inputEmail.props.value).toBe('vilsonmoro@gmail.com')
      })

      it('Atualiza estado ao digitar senha', () =>{
        render(<Cadastro />)
        const inputSenha = screen.getByPlaceholderText('Informe senha')
        expect(inputSenha).toBeTruthy()        
        fireEvent.changeText(inputSenha, '123') 
        expect(inputSenha.props.value).toBe('123')
      })

})