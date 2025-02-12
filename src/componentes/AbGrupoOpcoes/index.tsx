import React, { useState } from 'react';
import styled from 'styled-components';

const SectionEstilizada = styled.section<{ selecionado: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  background: ${(props) =>
    props.selecionado
      ? 'linear-gradient(97.54deg, #002f52 35.49%, #326589 165.37%)'
      : '#fff'};
  width: 194px;
  height: 88px;
  margin: 10px;
  border: 1px solid;
  border-color: ${(props) => (props.selecionado ? '#002f52' : '#eb9b00')};
  border-radius: 8px;

  font-family: sans-serif;
  cursor: pointer;

  header {
    color: ${(props) => (props.selecionado ? '#fff' : '#eb9b00')};
    font-size: 12px;
    font-weight: 400;
  }

  strong {
    color: ${(props) => (props.selecionado ? '#fff' : '#eb9b00')};
    font-size: 16px;
    font-weight: 700;
  }

  footer {
    color: ${(props) => (props.selecionado ? '#fff' : 'rgba(0, 0, 0, 0.54)')};
    font-size: 12px;
    font-weight: 400;
  }
`;

export interface AbGrupoOpcao {
  id: number;
  titulo: string;
  corpo: string;
  rodape: string;
}

export interface AbGrupoOpcoesProps {
  opcoes: AbGrupoOpcao[];
  valorPadrao?: AbGrupoOpcao | null;
  onChange?: (opcao: AbGrupoOpcao) => void;
}
export const AbGrupoOpcoes = ({
  opcoes,
  valorPadrao,
  onChange,
}: AbGrupoOpcoesProps) => {
  const [selecao, setSelecao] = useState<AbGrupoOpcao | null>(
    valorPadrao ?? null
  );

  const aoSelecionar = (opcao: AbGrupoOpcao): void => {
    setSelecao(opcao);

    if (onChange) {
      onChange(opcao);
    }
  };
  return (
    <>
      {opcoes.map((opcao) => (
        <SectionEstilizada
          key={opcao.id}
          selecionado={selecao?.id === opcao.id}
          onClick={() => aoSelecionar(opcao)}
        >
          <header>{opcao.titulo}</header>
          <div>
            <strong>{opcao.corpo}</strong>
          </div>
          <footer>{opcao.rodape}</footer>
        </SectionEstilizada>
      ))}
    </>
  );
};
