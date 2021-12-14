import { Button, Table } from 'antd';
import styled from 'styled-components';
import Column from 'antd/lib/table/Column';
import ColumnGroup from 'antd/lib/table/ColumnGroup';
import { deleteScamData } from '../../lib/api';
import useSearch from '../../hooks/useSearch';

interface ResultType {
  pk: string;
  sk: string;
  type: string;
  report_path: {
    manual_cafe: number;
    manual_cs: number;
    manual_app: number;
  };
}

function SearchResult({ results }: { results: ResultType[] }) {
  const data = results?.map(
    ({ pk, sk, type, report_path: { manual_cs, manual_cafe, manual_app } }) => {
      const value = pk.split('#')[1];
      const date = sk.split('#')[1];
      return {
        key: `${pk},${sk}`,
        value,
        date,
        type,
        manual_cafe,
        manual_cs,
        manual_app,
      };
    },
  );

  const renderDelteBtn = (target: any) => {
    const { value, date } = target;
    return (
      <Button onClick={() => handleDeleteScamData(value, date)}>Delete</Button>
    );
  };

  const handleDeleteScamData = async (value: string, date: string) => {
    const res = confirm('정말로 삭제하시겠습니까?');
    if (!res) return;
    const { message } = await deleteScamData(value, date);
    alert(message);
  };

  return (
    <Block>
      <Table dataSource={data}>
        <Column title="Value" dataIndex="value" key="value" />
        <Column title="Monitoring Date" dataIndex="date" key="date" />
        <Column title="Type" dataIndex="type" key="type" />
        <ColumnGroup title="Report Path">
          <Column title="Cafe" dataIndex="manual_cafe" key="manual_cafe" />
          <Column title="Cs" dataIndex="manual_cs" key="manual_cs" />
          <Column title="App" dataIndex="manual_app" key="manual_app" />
        </ColumnGroup>
        <Column title="" dataIndex="" key="x" render={renderDelteBtn} />
      </Table>
    </Block>
  );
}

const Block = styled.div``;

export default SearchResult;
