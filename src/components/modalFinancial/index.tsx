import { Modal, Form, Input, Select, DatePicker, Button } from "antd";

const { Option } = Select;
import "./modalFinancial.scss";

const ModalFinancial = (props: any) => {
  const { isModalVisible, setIsModalVisible } = props;

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal
        className="modal-financial"
        title="Financial Findims"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          layout="vertical"
          onFinish={() => {
            handleOk();
          }}
        >
          <Form.Item
            label="Order Date"
            name="orderDate"
            rules={[{ required: true, message: "Please select an order date!" }]}
          >
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            label="Account Type"
            name="accountType"
            rules={[{ required: true, message: "Please select an account type!" }]}
          >
            <Select placeholder="Please Select">
              <Option value="prepaid">Prepaid</Option>
              <Option value="expense">Expense</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Budget Account"
            name="budgetAccount"
            rules={[{ required: true, message: "Please select a budget account!" }]}
          >
            <Select placeholder="Please Select">
              <Option value="budget1">Budget 1</Option>
              <Option value="budget2">Budget 2</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Fixed Asset Number"
            name="fixedAssetNumber"
            rules={[
              {
                required: true,
                message: "Please fill this field when Account Type is 'Prepaid'!",
              },
            ]}
          >
            <Select placeholder="Please Select">
              <Option value="asset1">Asset 1</Option>
              <Option value="asset2">Asset 2</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Tax Group"
            name="taxGroup"
            rules={[{ required: true, message: "Please select a tax group!" }]}
          >
            <Select placeholder="Please Select">
              <Option value="tax1">Tax Group 1</Option>
              <Option value="tax2">Tax Group 2</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Total Price" name="totalPrice">
            <Input placeholder="-" disabled />
          </Form.Item>
          <Form.Item>
            <Button className="button-create" htmlType="submit" block>
              Create PO
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalFinancial;
