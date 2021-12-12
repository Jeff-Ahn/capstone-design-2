import axios from 'axios';

const adminInstance = axios.create({
  baseURL: 'https://dvgk35ila4.execute-api.ap-northeast-2.amazonaws.com/dev/admin',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': process.env.REACT_APP_X_API_KEY || '',
  }
});

export const getScamData = async (value: string): Promise<any> => {
  const response = await adminInstance.get(`?search=${value}`);
  return response.data;
}

export const addNewScamData = async (type: string, value: string, report_path: any): Promise<any> => {
  const response = await adminInstance.post('', {
    type,
    value,
    report_path,
  });
  return response.data;
}

export const deleteScamData = async (value: string, monitoring_date: Date): Promise<any> => {
  const response = await adminInstance.delete(`?value=${value}&monitoring_date=${monitoring_date}`);
  return response.data;
}