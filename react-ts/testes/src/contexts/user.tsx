import { createContext, ReactNode, useState } from 'react';

interface UseProviderProps {
  children: ReactNode;
}

type UserContexData = {
  aluno: string;
  qtdAlunos: number;
  mudaNome: (nome: string) => void;
  novoAluno: () => void;
}

export const UserContext = createContext({}as UserContexData)

function UserProvider({children}: UseProviderProps) {
  const [aluno, setAluno] = useState("Maria Silva");
  const [qtdAlunos, setQtdAlunos] = useState(40)

  function mudaNome(nome: string) {
    setAluno(nome)
  }

  function novoAluno() {
    setQtdAlunos(alunos => alunos+1)
  }

  return(
    <UserContext.Provider value={{aluno, qtdAlunos, mudaNome, novoAluno}}>
      {children}
    </UserContext.Provider>
  )
}


export default UserProvider