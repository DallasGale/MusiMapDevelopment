export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "8", 10);

  const allData = [
    {
      id: 0,
      columns: [
        {
          id: 0,
          label: "2024-01-15T09:30:00Z",
        },
        {
          id: 1,
          label: "1",
        },
        {
          id: 2,
          label: "arrow",
        },
        {
          id: 3,
          label: "n/a",
        },
        {
          id: 4,
          label: "n/a",
        },
        {
          id: 5,
          label: "n/a",
        },
      ],
    },
    {
      id: 1,
      columns: [
        {
          id: 6,
          label: "2024-01-15T09:31:00Z",
        },
        {
          id: 7,
          label: "2",
        },
        {
          id: 8,
          label: "circle",
        },
        {
          id: 9,
          label: "active",
        },
        {
          id: 10,
          label: "pending",
        },
        {
          id: 11,
          label: "complete",
        },
      ],
    },
    {
      id: 2,
      columns: [
        {
          id: 12,
          label: "2024-01-15T09:32:00Z",
        },
        {
          id: 13,
          label: "3",
        },
        {
          id: 14,
          label: "square",
        },
        {
          id: 15,
          label: "inactive",
        },
        {
          id: 16,
          label: "draft",
        },
        {
          id: 17,
          label: "review",
        },
      ],
    },
    {
      id: 3,
      columns: [
        {
          id: 18,
          label: "2024-01-15T09:33:00Z",
        },
        {
          id: 19,
          label: "4",
        },
        {
          id: 20,
          label: "triangle",
        },
        {
          id: 21,
          label: "processing",
        },
        {
          id: 22,
          label: "scheduled",
        },
        {
          id: 23,
          label: "approved",
        },
      ],
    },
    {
      id: 4,
      columns: [
        {
          id: 24,
          label: "2024-01-15T09:34:00Z",
        },
        {
          id: 25,
          label: "5",
        },
        {
          id: 26,
          label: "diamond",
        },
        {
          id: 27,
          label: "waiting",
        },
        {
          id: 28,
          label: "queued",
        },
        {
          id: 29,
          label: "rejected",
        },
      ],
    },
    {
      id: 5,
      columns: [
        {
          id: 30,
          label: "2024-01-15T09:35:00Z",
        },
        {
          id: 31,
          label: "6",
        },
        {
          id: 32,
          label: "star",
        },
        {
          id: 33,
          label: "running",
        },
        {
          id: 34,
          label: "executing",
        },
        {
          id: 35,
          label: "finished",
        },
      ],
    },
    {
      id: 6,
      columns: [
        {
          id: 36,
          label: "2024-01-15T09:36:00Z",
        },
        {
          id: 37,
          label: "7",
        },
        {
          id: 38,
          label: "hexagon",
        },
        {
          id: 39,
          label: "paused",
        },
        {
          id: 40,
          label: "suspended",
        },
        {
          id: 41,
          label: "cancelled",
        },
      ],
    },
    {
      id: 7,
      columns: [
        {
          id: 42,
          label: "2024-01-15T09:37:00Z",
        },
        {
          id: 43,
          label: "8",
        },
        {
          id: 44,
          label: "octagon",
        },
        {
          id: 45,
          label: "error",
        },
        {
          id: 46,
          label: "failed",
        },
        {
          id: 47,
          label: "timeout",
        },
      ],
    },
    {
      id: 8,
      columns: [
        {
          id: 48,
          label: "2024-01-15T09:38:00Z",
        },
        {
          id: 49,
          label: "9",
        },
        {
          id: 50,
          label: "oval",
        },
        {
          id: 51,
          label: "success",
        },
        {
          id: 52,
          label: "validated",
        },
        {
          id: 53,
          label: "archived",
        },
      ],
    },
    {
      id: 9,
      columns: [
        {
          id: 54,
          label: "2024-01-15T09:39:00Z",
        },
        {
          id: 55,
          label: "10",
        },
        {
          id: 56,
          label: "rhombus",
        },
        {
          id: 57,
          label: "warning",
        },
        {
          id: 58,
          label: "flagged",
        },
        {
          id: 59,
          label: "escalated",
        },
      ],
    },
    {
      id: 10,
      columns: [
        {
          id: 60,
          label: "2024-01-15T09:40:00Z",
        },
        {
          id: 61,
          label: "11",
        },
        {
          id: 62,
          label: "pentagon",
        },
        {
          id: 63,
          label: "debug",
        },
        {
          id: 64,
          label: "testing",
        },
        {
          id: 65,
          label: "deployed",
        },
      ],
    },
    {
      id: 11,
      columns: [
        {
          id: 66,
          label: "2024-01-15T09:41:00Z",
        },
        {
          id: 67,
          label: "12",
        },
        {
          id: 68,
          label: "cross",
        },
        {
          id: 69,
          label: "blocked",
        },
        {
          id: 70,
          label: "locked",
        },
        {
          id: 71,
          label: "released",
        },
      ],
    },
    {
      id: 12,
      columns: [
        {
          id: 72,
          label: "2024-01-15T09:42:00Z",
        },
        {
          id: 73,
          label: "13",
        },
        {
          id: 74,
          label: "heart",
        },
        {
          id: 75,
          label: "priority",
        },
        {
          id: 76,
          label: "urgent",
        },
        {
          id: 77,
          label: "resolved",
        },
      ],
    },
    {
      id: 13,
      columns: [
        {
          id: 78,
          label: "2024-01-15T09:43:00Z",
        },
        {
          id: 79,
          label: "14",
        },
        {
          id: 80,
          label: "lightning",
        },
        {
          id: 81,
          label: "critical",
        },
        {
          id: 82,
          label: "emergency",
        },
        {
          id: 83,
          label: "mitigated",
        },
      ],
    },
    {
      id: 14,
      columns: [
        {
          id: 84,
          label: "2024-01-15T09:44:00Z",
        },
        {
          id: 85,
          label: "15",
        },
        {
          id: 86,
          label: "cloud",
        },
        {
          id: 87,
          label: "syncing",
        },
        {
          id: 88,
          label: "uploading",
        },
        {
          id: 89,
          label: "synchronized",
        },
      ],
    },
    {
      id: 15,
      columns: [
        {
          id: 90,
          label: "2024-01-15T09:45:00Z",
        },
        {
          id: 91,
          label: "16",
        },
        {
          id: 92,
          label: "gear",
        },
        {
          id: 93,
          label: "configuring",
        },
        {
          id: 94,
          label: "initializing",
        },
        {
          id: 95,
          label: "optimized",
        },
      ],
    },
    {
      id: 16,
      columns: [
        {
          id: 96,
          label: "2024-01-15T09:46:00Z",
        },
        {
          id: 97,
          label: "17",
        },
        {
          id: 98,
          label: "shield",
        },
        {
          id: 99,
          label: "protected",
        },
        {
          id: 100,
          label: "encrypted",
        },
        {
          id: 101,
          label: "secured",
        },
      ],
    },
    {
      id: 17,
      columns: [
        {
          id: 102,
          label: "2024-01-15T09:47:00Z",
        },
        {
          id: 103,
          label: "18",
        },
        {
          id: 104,
          label: "bell",
        },
        {
          id: 105,
          label: "notifying",
        },
        {
          id: 106,
          label: "alerting",
        },
        {
          id: 107,
          label: "notified",
        },
      ],
    },
    {
      id: 18,
      columns: [
        {
          id: 108,
          label: "2024-01-15T09:48:00Z",
        },
        {
          id: 109,
          label: "19",
        },
        {
          id: 110,
          label: "key",
        },
        {
          id: 111,
          label: "unlocking",
        },
        {
          id: 112,
          label: "accessing",
        },
        {
          id: 113,
          label: "authorized",
        },
      ],
    },
    {
      id: 19,
      columns: [
        {
          id: 114,
          label: "2024-01-15T09:49:00Z",
        },
        {
          id: 115,
          label: "20",
        },
        {
          id: 116,
          label: "flag",
        },
        {
          id: 117,
          label: "marking",
        },
        {
          id: 118,
          label: "tagging",
        },
        {
          id: 119,
          label: "categorized",
        },
      ],
    },
  ];

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginationData = allData.slice(startIndex, endIndex);

  return Response.json({
    data: paginationData,
    total: allData.length,
  });
}
