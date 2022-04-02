import React, {useEffect, useState} from 'react';
import Home from '../components/Home';

// services
import {getResults, downloadFile, uploadFile} from '../services/results';
import {convertError} from "@typescript-eslint/typescript-estree/dist/convert";
import {useRouter} from "next/router";

const HomeContainer = () => {
    const router = useRouter();
    const [data, setData] = useState(); // console.log(data); 출력해보면 result list 정보 나옴

    // Result List 호출
    useEffect(() => {
        getResults({})
            .then((res) => {
                const data = res;
                console.log(data);
            })
            .catch((err) => {
                console.error(err);
                console.error('서버연결 실패@@@@@@');
            });
    }, []);

    // 파일 다운로드
    const doDownload = () => {
        downloadFile({}).then((res) => {
            const data = res.data;
            router.push('http://localhost:3065/api/download');
            setData(data);
            console.log(data)
        }).catch((err) => {
            console.error(err);
        });
    };

    // 파일 업로드
    const doUpload = (e: any) => {
        const fd = new FormData();
        Array.from(e.target.files).map((file: any, key: any) => {
            fd.append('results', file);
            console.log(file)
        });
        fd.append('results', 'results');
        console.log(fd)
        uploadFile(fd)
            .then((res) => {
                const data = res;
                console.log(res);
                // loading(false);
            })
            .catch((err) => {
                console.error('XXXXXXX@@@@')
                console.error(err);
            });
    };

    return (
        <div>
            <Home doDownload={doDownload} doUpload={doUpload} data={data}/>
        </div>
    );
};

export default HomeContainer;
