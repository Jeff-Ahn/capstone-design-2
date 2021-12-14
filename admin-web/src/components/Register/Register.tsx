import { Button, Input, Select } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';
import { addNewScamData } from '../../lib/api';

const { Option } = Select;

function Register() {
  const [type, setType] = useState('');
  const [value, setValue] = useState('');
  const [appCnt, setAppCnt] = useState(0);
  const [csCnt, setCsCnt] = useState(0);
  const [cafeCnt, setCafeCnt] = useState(0);

  const handleSubmit = async () => {
    const report_path = {
      manual_cs: csCnt,
      manual_cafe: cafeCnt,
      manual_app: appCnt,
    };
    const { message } = await addNewScamData(type, value, report_path);
    alert(message);
  };

  return (
    <Block>
      <InputBlock>
        <strong>TYPE:</strong>
        <Select
          style={{ width: '100%' }}
          onSelect={(selected: any) => setType(selected)}
        >
          <Option value="account_number">account_number</Option>
          <Option value="phone_number">phone_number</Option>
          <Option value="kako_id">kako_id</Option>
        </Select>
      </InputBlock>
      <InputBlock>
        <strong>VALUE:</strong>
        <Input value={value} onChange={(e: any) => setValue(e.target.value)} />
      </InputBlock>
      <InputBlock>
        <strong>신고건수</strong>
        <InputBlock>
          <span>APP:</span>
          <Input
            type="number"
            value={appCnt}
            onChange={(e: any) => setAppCnt(e.target.value * 1)}
          />
        </InputBlock>
        <InputBlock>
          <span>CS:</span>
          <Input
            type="number"
            value={csCnt}
            onChange={(e: any) => setCsCnt(e.target.value * 1)}
          />
        </InputBlock>
        <InputBlock>
          <span>CAFE:</span>
          <Input
            type="number"
            value={cafeCnt}
            onChange={(e: any) => setCafeCnt(e.target.value * 1)}
          />
        </InputBlock>
      </InputBlock>
      <ButtonBlock>
        <Button onClick={handleSubmit}>등록하기</Button>
      </ButtonBlock>
    </Block>
  );
}

const Block = styled.div`
  margin: 0 auto;
`;

const InputBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  strong {
    width: 50px;
  }
`;

const ButtonBlock = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default Register;
