import "./App.css";
import "antd/dist/antd.css";
import { Form, Button, Spin, Modal } from "antd";
import TagSelectFromItem from "./components/TagSelectFromItem";
import AddNounButton from "./components/AddNounButton";

import useNounList from "./hooks/useNounList";

import getRandom from "./helpers/getRandom";

function App() {
  const nounList = useNounList();
  console.log(nounList);
  const tagList = [];
  const tagMap = {};
  nounList.forEach((item) => {
    if (tagList.indexOf(item.tag) === -1) {
      tagList.push(item.tag);
      tagMap[item.tag] = [item.value];
    } else {
      tagMap[item.tag].push(item.value);
    }
  });

  const onFinish = ({ tags }) => {
    const result = tags.map((tag) => {
      const values = tagMap[tag];
      return values[getRandom(values.length)];
    });
    Modal.info({
      title: "结果",
      content: result.join(" "),
    });
    console.log(result);
  };

  return (
    <div className="app">
      <AddNounButton />
      <Spin spinning={!nounList.length}>
        <Form onFinish={onFinish}>
          <TagSelectFromItem tagList={tagList} />
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Spin>
    </div>
  );
}

export default App;
