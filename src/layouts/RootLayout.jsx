import React from "react";
import Navbar from "../components/Navbar";
import DashBoard from "./DashBoard";
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.500">
      <GridItem as="main" colSpan={{ base: "6", lg: "4", xl: "5" }} p="40px">
        <Navbar />
        <Outlet />
      </GridItem>
      <GridItem
        as="aside"
        colSpan={{ base: "6", lg: "2", xl: "1" }}
        bg="indigo"
        minHeight={{ lg: "20vh" }}
        p={{ base: "20px", lg: "30px" }}
      >
        <Sidebar />
      </GridItem>
    </Grid>
  );
}
