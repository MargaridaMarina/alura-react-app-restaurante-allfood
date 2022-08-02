import { Box, Button, TextField, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import http from "../../../http"
import ITag from "../../../interfaces/ITag"

const FormularioPrato = () => {
  
  const [nomePrato, setNomePrato] = useState('')
  const [descricao, setDescricao] = useState('')
  
  const [tags, setTags] = useState<ITag[]>([])
  
  useEffect(()=>{
    http.get<{tags:ITag[]}>('tags/')
      .then(resposta => setTags(resposta.data.tags))
  }, [])

  const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    }

  return (
    <Box sx={{display:'flex', flexDirection:"column", alignItems:"center"}}>
      <Typography component="h1" variant="h6" >Formulário de Pratos</Typography>
        <Box component="form" sx={{}} onSubmit={aoSubmeterForm}>
          <TextField 
            value={nomePrato}
            onChange={evento => setNomePrato(evento.target.value)} 
            label="Nome do Prato" 
            variant="standard"
            fullWidth
            required
          />
          <TextField 
            value={descricao}
            onChange={evento => setDescricao(evento.target.value)} 
            label="Descrição" 
            variant="standard"
            fullWidth
            required
          />
          <Button sx={{marginTop:1}} type="submit" fullWidth variant="outlined">
              Salvar
          </Button>
        </Box>
    </Box>
)}

export default FormularioPrato