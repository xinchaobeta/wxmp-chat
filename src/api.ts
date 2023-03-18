import axios from 'axios';

const request = axios.create({
  baseURL: process.env.API_SERVER,
  timeout: 5000,
});


export interface ApiGetAnswerProps {
  userId: string;
  content: string;
}
export const apiGetAnswer = async (props: ApiGetAnswerProps) => {
  const { userId, content } = props;
  const { data } = await request.post<{ content: string }>('/message', { content }, {
    params: {
      userId
    },
  })
  return data.content;
}