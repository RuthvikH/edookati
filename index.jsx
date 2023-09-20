import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { expenses } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Manage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "Expensename",
      headerName: "Expense Type",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "amount",
      headerName: "Amount Paid",
      flex:1,
    },
    {
      field: "dateOfTransaction",
      headerName: "Date of Transaction",
      flex: 1,
    },
    
    {
      field: "comments",
      headerName: "Comments",
      flex: 1,
    },
    {
      field: "dateofSubmission",
      headerName: "Date of Submission",
      flex: 1,
    },
    {
      field: "photoReceipt",
      headerName:"Photo Id",
      flex:1,
    },
    {
      field: "status",
      headerName: "status",
      flex: 1,
      renderCell: ({ row: { status } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="left"
            backgroundColor={
              status === "rejected"
                ? colors.redAccent[600]
                : status === "approved"
                ? colors.greenAccent[700]
                : colors.blueAccent[700]
            }
            borderRadius="4px"
          >
            {status === "pending" && <AdminPanelSettingsOutlinedIcon />}
            {status === "rejected" && <SecurityOutlinedIcon />}
            {status === "approved" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {status}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="Manage Expenses" subtitle="Approve or Reject the Expense records" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={expenses} columns={columns} />
      </Box>
    </Box>
  );
};

export default Manage;
