import { useState } from "react";
import { Table, Button, Select, Tag, Input } from "antd";
const { Option } = Select;

import "./request.scss";

interface DataType {
  key: string;
  status: string;
  poNumber: string;
  itemName: string;
  vendorName: string;
  rejectionReason: string;
}

const Request = () => {
  const [statusFilter, setStatusFilter] = useState("");

  const data: DataType[] = [
    {
      key: "1",
      status: "In Review",
      poNumber: "2024.001/1/HR&GA",
      itemName: "Thinkpad Ryzen 5 Pro",
      vendorName: "Asus",
      rejectionReason: "-",
    },
    {
      key: "2",
      status: "Rejected",
      poNumber: "2024.001/1/HR&GA",
      itemName: "Product D",
      vendorName: "MSI",
      rejectionReason: "Expired",
    },
    {
      key: "3",
      status: "Approved",
      poNumber: "2024.001/1/HR&GA",
      itemName: "Product F",
      vendorName: "Apple",
      rejectionReason: "-",
    },
  ];

  const columns = [
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_: any, record: DataType) => (
        <div className="action-buttons">
          {record.status === "Approved" && (
            <Button type="primary">Send to Vendor</Button>
          )}
        </div>
      ),
    },
    {
      title: "Status Approval",
      dataIndex: "status",
      key: "status",
      render: (status: string) => {
        let color = "";
        switch (status) {
          case "In Review":
            color = "orange";
            break;
          case "Rejected":
            color = "red";
            break;
          case "Approved":
            color = "green";
            break;
          default:
            color = "default";
        }
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: "PO Number Letter",
      dataIndex: "poNumber",
      key: "poNumber",
    },
    {
      title: "Item Name",
      dataIndex: "itemName",
      key: "itemName",
    },
    {
      title: "Vendor Name",
      dataIndex: "vendorName",
      key: "vendorName",
    },
    {
      title: "Reason Rejection",
      dataIndex: "rejectionReason",
      key: "rejectionReason",
    },
  ];

  return (
    <div className="request-table-container">
      <h2>My Request</h2>
      <p>On this page, you can see the progress of your order</p>

      <div className="filters">
        <Select
          placeholder="Choose Status"
          style={{ width: 200 }}
          onChange={(value) => setStatusFilter(value)}
        >
          <Option value="">All</Option>
          <Option value="In Review">In Review</Option>
          <Option value="Rejected">Rejected</Option>
          <Option value="Approved">Approved</Option>
        </Select>
        <Input.Search placeholder="Search..." style={{ width: 300 }} />
      </div>

      <Table
        dataSource={data.filter((item) =>
          statusFilter ? item.status === statusFilter : true
        )}
        columns={columns}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default Request;