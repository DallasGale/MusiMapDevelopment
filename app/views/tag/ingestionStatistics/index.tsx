"use client";

import useApi from "@hooks/useApi";
import LoadingOverlay from "@components/loadingOverlay";
import Table from "@components/table";
import View from "@components/view";
import { headColumns } from "@mocks/tag/ingestionStatistics/tableData";

const IngestionsStatisticsView = () => {
  const getEndpoint = useApi({ endpoint: "ingestionStatistics" });
  const { data, total, loading, limit, page, setPage } = getEndpoint;

  const uploads = 977;
  return (
    <View id="tag-clients-view">
      <LoadingOverlay loading={loading} />
      <Table
        title={`Total number of uploads: ${uploads}`}
        headColumns={headColumns}
        rows={data}
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

export default IngestionsStatisticsView;
