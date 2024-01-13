import express from 'express'
import cors from 'cors'
import { Configuration, OpenAIApi } from 'openai'



const app = express()

const configuration = new Configuration({
    organization: "org-XVof9YY6mHN5rnZO0ANlz2bH",
    apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration)

app.use(express.json())
app.use(cors())

app.post('/message', async(req, res) => {
    console.log("app.post /message",req)
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
        console.log("response.then(data)", data),
        res.send({message:data.data.choices[1].text});
    })

})

app.listen(4000, () => {
    console.log('Server is running on local port 4000')
})