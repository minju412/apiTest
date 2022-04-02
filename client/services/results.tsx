import initAxios from './defaultClient';

// const prefix = '/api';

// 리스트
export const getResults = async (args: any) => {
  const axios = initAxios();
  return await axios.get('/api/results', {
    params: {
      id: args.id,
      url: args.url,
      title: args.title,
      language: args.language,
      category: args.categpry,
      site_tracking_codes: args.site_tracking_codes,
      personal_information: args.personal_information,
      others: args.others,
      reference_url: args.reference_url,
    },
  });
};

// 파일 다운로드
export const downloadFile = async (args: any) => {
  const axios = initAxios();
  return await axios.get('/api/download', {});
};

// 파일 업로드
export const uploadFile = async (args: any) => {
  const axios = initAxios();
  return await axios.post('/api/upload', args, {
    headers: { 'Content-Type': 'text/csv' },
  });
};
