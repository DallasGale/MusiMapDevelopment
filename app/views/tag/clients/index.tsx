"use client";

import useApi from "@hooks/useApi";
import ActionsGroup from "@components/actionGroup";
import ActionButton from "@components/button/action";
import Table from "@components/table";
import View from "@components/view";
import { headColumns } from "@mocks/tag/clients/tableData";

const ClientsView = () => {
  const getEndpoint = useApi({ endpoint: "clients" });
  const { data, total, limit, page, setPage } = getEndpoint;

  return (
    <View id="tag-clients-view">
      <Table
        title="Your clients"
        titleActions={
          <ActionButton onClick={() => null} label="Add a client" />
        }
        headColumns={headColumns}
        rows={data}
        rowActions={
          <ActionsGroup>
            <ActionButton onClick={() => null} label="Sync" />
            <ActionButton onClick={() => null} label="Remove" />
          </ActionsGroup>
        }
        pagination={{
          total,
          limit,
          page,
          setPage,
        }}
      />
    </View>
  );
};

export default ClientsView;
