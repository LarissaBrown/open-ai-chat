import express from 'express'
const app = express()
import cors from 'cors'
import { Configuration, OpenAIApi } from 'openai'
import dotenv from 'dotenv'


const token = process.env.REACT_APP_API_TOKEN
const configuration = new Configuration({apiKey: token});
const openAi = new OpenAIApi(configuration)
console.log(token)

app.use(express.json())
app.use(cors())

app.post('/message', (req, res) => {
    const response = openAi.createCompletion({
        model: 'text-davinchi-003',
        prompt: req.body.prompt,
        temperature:0,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        max_tokens: 1024 ,   
})
    response.then((data) => {
        res.send({message:data.data.choices[0].text});
    })

})

app.listen(4000, () => {
    console.log('Server is running on local port 4000')
})