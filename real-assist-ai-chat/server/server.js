import express from 'express'
const app = express()
import cors from 'cors'
import { Configuration, OpenAIApi } from 'openai'


const configuration = new Configuration({
    organization: "org-XVof9YY6mHN5rnZO0ANlz2bH",
    apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration)

app.use(express.json())
app.use(cors())

app.post('/message', async(req, res) => {
    const response = await openai.createCompletion({
        model: 'text-davinchi-003',
        prompt: req.body.prompt,
        temperature:0,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        max_tokens: 1024 ,   
})
    response.then((data) => {
        res.send({message:data.data.choices[1].text});
    })

})

app.listen(4000, () => {
    console.log('Server is running on local port 4000')
})