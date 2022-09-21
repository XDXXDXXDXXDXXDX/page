import { Form, Button, Select } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const { Option } = Select;
function tagSelectFrom({ tagList }) {
  return (
    <Form.List name="tags">
      {(fields, { add, remove }, { errors }) => (
        <>
          {fields.map((field) => (
            <Form.Item required={false} key={field.key}>
              <Form.Item {...field} noStyle>
                <Select style={{ width: 100 }}>
                  {tagList.map((tag) => (
                    <Option value={tag} key={tag}>
                      {tag}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <MinusCircleOutlined onClick={() => remove(field.name)} />
            </Form.Item>
          ))}
          <Form.Item>
            <Button
              type="dashed"
              onClick={() => add()}
              style={{ width: "60%" }}
              icon={<PlusOutlined />}
            >
              Add field
            </Button>
            <Form.ErrorList errors={errors} />
          </Form.Item>
        </>
      )}
    </Form.List>
  );
}

export default tagSelectFrom;
