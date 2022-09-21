import { Form, Button, Modal, Space, Input } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import useCollection from "../../hooks/useCollection";

function AddNounButton() {
  const [form] = Form.useForm();
  const collection = useCollection({
    db: "XDX",
    collection: "random",
  });
  const handleSubmit = () => {
    const { noun } = form.getFieldsValue();
    collection.insertMany(noun);
  };
  const handleClick = (e) => {
    Modal.confirm({
      title: "添加",
      content: (
        <Form name="addNoun" form={form}>
          <Form.List name="noun">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, fieldKey, ...restField }) => (
                  <Space key={key}>
                    <Form.Item
                      {...restField}
                      name={[name, "value"]}
                      fieldKey={[fieldKey, "value"]}
                    >
                      <Input placeholder="Value" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "tag"]}
                      fieldKey={[fieldKey, "last"]}
                    >
                      <Input placeholder="Tag" />
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </Space>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined />}
                  >
                    Add field
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </Form>
      ),
      onOk: handleSubmit,
      onCancel: (close) => close(),
    });
  };

  return (
    <div>
      <Button onClick={handleClick}>添加名词</Button>
    </div>
  );
}

export default AddNounButton;
