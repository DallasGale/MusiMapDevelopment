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
          label: "download",
        },
        {
          id: 1,
          label: "AYAUYS76S",
        },
        {
          id: 2,
          label: "2024-01-15T09:31:00Z",
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
        {
          id: 6,
          label: "n/a",
        },
        {
          id: 7,
          label: "n/a",
        },
        {
          id: 8,
          label: "n/a",
        },
        {
          id: 9,
          label: "n/a",
        },
        {
          id: 10,
          label: "n/a",
        },
        {
          id: 11,
          label: "n/a",
        },
        {
          id: 12,
          label: "n/a",
        },
        {
          id: 13,
          label: "n/a",
        },
        {
          id: 14,
          label: "n/a",
        },
      ],
    },
    {
      id: 1,
      columns: [
        {
          id: 15,
          label: "download",
        },
        {
          id: 16,
          label: "BXBVXT87T",
        },
        {
          id: 17,
          label: "2024-01-15T09:31:00Z",
        },
        {
          id: 18,
          label: "n/a",
        },
        {
          id: 19,
          label: "n/a",
        },
        {
          id: 20,
          label: "n/a",
        },
        {
          id: 21,
          label: "n/a",
        },
        {
          id: 22,
          label: "n/a",
        },
        {
          id: 23,
          label: "n/a",
        },
        {
          id: 24,
          label: "n/a",
        },
        {
          id: 25,
          label: "n/a",
        },
        {
          id: 26,
          label: "n/a",
        },
        {
          id: 27,
          label: "n/a",
        },
        {
          id: 28,
          label: "n/a",
        },
        {
          id: 29,
          label: "n/a",
        },
      ],
    },
    {
      id: 2,
      columns: [
        {
          id: 30,
          label: "download",
        },
        {
          id: 31,
          label: "CZCWYU98U",
        },
        {
          id: 32,
          label: "2024-01-15T09:31:00Z",
        },
        {
          id: 33,
          label: "n/a",
        },
        {
          id: 34,
          label: "n/a",
        },
        {
          id: 35,
          label: "n/a",
        },
        {
          id: 36,
          label: "n/a",
        },
        {
          id: 37,
          label: "n/a",
        },
        {
          id: 38,
          label: "n/a",
        },
        {
          id: 39,
          label: "n/a",
        },
        {
          id: 40,
          label: "n/a",
        },
        {
          id: 41,
          label: "n/a",
        },
        {
          id: 42,
          label: "n/a",
        },
        {
          id: 43,
          label: "n/a",
        },
        {
          id: 44,
          label: "n/a",
        },
      ],
    },
    {
      id: 3,
      columns: [
        {
          id: 45,
          label: "download",
        },
        {
          id: 46,
          label: "DADXZV09V",
        },
        {
          id: 47,
          label: "2024-01-15T09:31:00Z",
        },
        {
          id: 48,
          label: "n/a",
        },
        {
          id: 49,
          label: "n/a",
        },
        {
          id: 50,
          label: "n/a",
        },
        {
          id: 51,
          label: "n/a",
        },
        {
          id: 52,
          label: "n/a",
        },
        {
          id: 53,
          label: "n/a",
        },
        {
          id: 54,
          label: "n/a",
        },
        {
          id: 55,
          label: "n/a",
        },
        {
          id: 56,
          label: "n/a",
        },
        {
          id: 57,
          label: "n/a",
        },
        {
          id: 58,
          label: "n/a",
        },
        {
          id: 59,
          label: "n/a",
        },
      ],
    },
    {
      id: 4,
      columns: [
        {
          id: 60,
          label: "download",
        },
        {
          id: 61,
          label: "EBEYA0W1A",
        },
        {
          id: 62,
          label: "2024-01-15T09:31:00Z",
        },
        {
          id: 63,
          label: "n/a",
        },
        {
          id: 64,
          label: "n/a",
        },
        {
          id: 65,
          label: "n/a",
        },
        {
          id: 66,
          label: "n/a",
        },
        {
          id: 67,
          label: "n/a",
        },
        {
          id: 68,
          label: "n/a",
        },
        {
          id: 69,
          label: "n/a",
        },
        {
          id: 70,
          label: "n/a",
        },
        {
          id: 71,
          label: "n/a",
        },
        {
          id: 72,
          label: "n/a",
        },
        {
          id: 73,
          label: "n/a",
        },
        {
          id: 74,
          label: "n/a",
        },
      ],
    },
    {
      id: 5,
      columns: [
        {
          id: 75,
          label: "download",
        },
        {
          id: 76,
          label: "FCFZB1X2B",
        },
        {
          id: 77,
          label: "2024-01-15T09:31:00Z",
        },
        {
          id: 78,
          label: "n/a",
        },
        {
          id: 79,
          label: "n/a",
        },
        {
          id: 80,
          label: "n/a",
        },
        {
          id: 81,
          label: "n/a",
        },
        {
          id: 82,
          label: "n/a",
        },
        {
          id: 83,
          label: "n/a",
        },
        {
          id: 84,
          label: "n/a",
        },
        {
          id: 85,
          label: "n/a",
        },
        {
          id: 86,
          label: "n/a",
        },
        {
          id: 87,
          label: "n/a",
        },
        {
          id: 88,
          label: "n/a",
        },
        {
          id: 89,
          label: "n/a",
        },
      ],
    },
    {
      id: 6,
      columns: [
        {
          id: 90,
          label: "download",
        },
        {
          id: 91,
          label: "GDGAC2Y3C",
        },
        {
          id: 92,
          label: "2024-01-15T09:31:00Z",
        },
        {
          id: 93,
          label: "n/a",
        },
        {
          id: 94,
          label: "n/a",
        },
        {
          id: 95,
          label: "n/a",
        },
        {
          id: 96,
          label: "n/a",
        },
        {
          id: 97,
          label: "n/a",
        },
        {
          id: 98,
          label: "n/a",
        },
        {
          id: 99,
          label: "n/a",
        },
        {
          id: 100,
          label: "n/a",
        },
        {
          id: 101,
          label: "n/a",
        },
        {
          id: 102,
          label: "n/a",
        },
        {
          id: 103,
          label: "n/a",
        },
        {
          id: 104,
          label: "n/a",
        },
      ],
    },
    {
      id: 7,
      columns: [
        {
          id: 105,
          label: "download",
        },
        {
          id: 106,
          label: "HEHBD3Z4D",
        },
        {
          id: 107,
          label: "2024-01-15T09:31:00Z",
        },
        {
          id: 108,
          label: "n/a",
        },
        {
          id: 109,
          label: "n/a",
        },
        {
          id: 110,
          label: "n/a",
        },
        {
          id: 111,
          label: "n/a",
        },
        {
          id: 112,
          label: "n/a",
        },
        {
          id: 113,
          label: "n/a",
        },
        {
          id: 114,
          label: "n/a",
        },
        {
          id: 115,
          label: "n/a",
        },
        {
          id: 116,
          label: "n/a",
        },
        {
          id: 117,
          label: "n/a",
        },
        {
          id: 118,
          label: "n/a",
        },
        {
          id: 119,
          label: "n/a",
        },
      ],
    },
    {
      id: 8,
      columns: [
        {
          id: 120,
          label: "download",
        },
        {
          id: 121,
          label: "IFICE4A5E",
        },
        {
          id: 122,
          label: "2024-01-15T09:31:00Z",
        },
        {
          id: 123,
          label: "n/a",
        },
        {
          id: 124,
          label: "n/a",
        },
        {
          id: 125,
          label: "n/a",
        },
        {
          id: 126,
          label: "n/a",
        },
        {
          id: 127,
          label: "n/a",
        },
        {
          id: 128,
          label: "n/a",
        },
        {
          id: 129,
          label: "n/a",
        },
        {
          id: 130,
          label: "n/a",
        },
        {
          id: 131,
          label: "n/a",
        },
        {
          id: 132,
          label: "n/a",
        },
        {
          id: 133,
          label: "n/a",
        },
        {
          id: 134,
          label: "n/a",
        },
      ],
    },
    {
      id: 9,
      columns: [
        {
          id: 135,
          label: "download",
        },
        {
          id: 136,
          label: "JGJDF5B6F",
        },
        {
          id: 137,
          label: "2024-01-15T09:31:00Z",
        },
        {
          id: 138,
          label: "n/a",
        },
        {
          id: 139,
          label: "n/a",
        },
        {
          id: 140,
          label: "n/a",
        },
        {
          id: 141,
          label: "n/a",
        },
        {
          id: 142,
          label: "n/a",
        },
        {
          id: 143,
          label: "n/a",
        },
        {
          id: 144,
          label: "n/a",
        },
        {
          id: 145,
          label: "n/a",
        },
        {
          id: 146,
          label: "n/a",
        },
        {
          id: 147,
          label: "n/a",
        },
        {
          id: 148,
          label: "n/a",
        },
        {
          id: 149,
          label: "n/a",
        },
      ],
    },
    {
      id: 10,
      columns: [
        {
          id: 150,
          label: "download",
        },
        {
          id: 151,
          label: "KHKEG6C7G",
        },
        {
          id: 152,
          label: "2024-01-15T09:31:00Z",
        },
        {
          id: 153,
          label: "n/a",
        },
        {
          id: 154,
          label: "n/a",
        },
        {
          id: 155,
          label: "n/a",
        },
        {
          id: 156,
          label: "n/a",
        },
        {
          id: 157,
          label: "n/a",
        },
        {
          id: 158,
          label: "n/a",
        },
        {
          id: 159,
          label: "n/a",
        },
        {
          id: 160,
          label: "n/a",
        },
        {
          id: 161,
          label: "n/a",
        },
        {
          id: 162,
          label: "n/a",
        },
        {
          id: 163,
          label: "n/a",
        },
        {
          id: 164,
          label: "n/a",
        },
      ],
    },
    {
      id: 11,
      columns: [
        {
          id: 165,
          label: "download",
        },
        {
          id: 166,
          label: "LILFH7D8H",
        },
        {
          id: 167,
          label: "2024-01-15T09:31:00Z",
        },
        {
          id: 168,
          label: "n/a",
        },
        {
          id: 169,
          label: "n/a",
        },
        {
          id: 170,
          label: "n/a",
        },
        {
          id: 171,
          label: "n/a",
        },
        {
          id: 172,
          label: "n/a",
        },
        {
          id: 173,
          label: "n/a",
        },
        {
          id: 174,
          label: "n/a",
        },
        {
          id: 175,
          label: "n/a",
        },
        {
          id: 176,
          label: "n/a",
        },
        {
          id: 177,
          label: "n/a",
        },
        {
          id: 178,
          label: "n/a",
        },
        {
          id: 179,
          label: "n/a",
        },
      ],
    },
    {
      id: 12,
      columns: [
        {
          id: 180,
          label: "download",
        },
        {
          id: 181,
          label: "MJMGI8E9I",
        },
        {
          id: 182,
          label: "2024-01-15T09:31:00Z",
        },
        {
          id: 183,
          label: "n/a",
        },
        {
          id: 184,
          label: "n/a",
        },
        {
          id: 185,
          label: "n/a",
        },
        {
          id: 186,
          label: "n/a",
        },
        {
          id: 187,
          label: "n/a",
        },
        {
          id: 188,
          label: "n/a",
        },
        {
          id: 189,
          label: "n/a",
        },
        {
          id: 190,
          label: "n/a",
        },
        {
          id: 191,
          label: "n/a",
        },
        {
          id: 192,
          label: "n/a",
        },
        {
          id: 193,
          label: "n/a",
        },
        {
          id: 194,
          label: "n/a",
        },
      ],
    },
    {
      id: 13,
      columns: [
        {
          id: 195,
          label: "download",
        },
        {
          id: 196,
          label: "NKNHJ9F0J",
        },
        {
          id: 197,
          label: "2024-01-15T09:31:00Z",
        },
        {
          id: 198,
          label: "n/a",
        },
        {
          id: 199,
          label: "n/a",
        },
        {
          id: 200,
          label: "n/a",
        },
        {
          id: 201,
          label: "n/a",
        },
        {
          id: 202,
          label: "n/a",
        },
        {
          id: 203,
          label: "n/a",
        },
        {
          id: 204,
          label: "n/a",
        },
        {
          id: 205,
          label: "n/a",
        },
        {
          id: 206,
          label: "n/a",
        },
        {
          id: 207,
          label: "n/a",
        },
        {
          id: 208,
          label: "n/a",
        },
        {
          id: 209,
          label: "n/a",
        },
      ],
    },
    {
      id: 14,
      columns: [
        {
          id: 210,
          label: "download",
        },
        {
          id: 211,
          label: "OLOIK0G1K",
        },
        {
          id: 212,
          label: "2024-01-15T09:31:00Z",
        },
        {
          id: 213,
          label: "n/a",
        },
        {
          id: 214,
          label: "n/a",
        },
        {
          id: 215,
          label: "n/a",
        },
        {
          id: 216,
          label: "n/a",
        },
        {
          id: 217,
          label: "n/a",
        },
        {
          id: 218,
          label: "n/a",
        },
        {
          id: 219,
          label: "n/a",
        },
        {
          id: 220,
          label: "n/a",
        },
        {
          id: 221,
          label: "n/a",
        },
        {
          id: 222,
          label: "n/a",
        },
        {
          id: 223,
          label: "n/a",
        },
        {
          id: 224,
          label: "n/a",
        },
      ],
    },
    {
      id: 15,
      columns: [
        {
          id: 225,
          label: "download",
        },
        {
          id: 226,
          label: "PMPJL1H2L",
        },
        {
          id: 227,
          label: "2024-01-15T09:31:00Z",
        },
        {
          id: 228,
          label: "n/a",
        },
        {
          id: 229,
          label: "n/a",
        },
        {
          id: 230,
          label: "n/a",
        },
        {
          id: 231,
          label: "n/a",
        },
        {
          id: 232,
          label: "n/a",
        },
        {
          id: 233,
          label: "n/a",
        },
        {
          id: 234,
          label: "n/a",
        },
        {
          id: 235,
          label: "n/a",
        },
        {
          id: 236,
          label: "n/a",
        },
        {
          id: 237,
          label: "n/a",
        },
        {
          id: 238,
          label: "n/a",
        },
        {
          id: 239,
          label: "n/a",
        },
      ],
    },
    {
      id: 16,
      columns: [
        {
          id: 240,
          label: "download",
        },
        {
          id: 241,
          label: "QNQKM2I3M",
        },
        {
          id: 242,
          label: "2024-01-15T09:31:00Z",
        },
        {
          id: 243,
          label: "n/a",
        },
        {
          id: 244,
          label: "n/a",
        },
        {
          id: 245,
          label: "n/a",
        },
        {
          id: 246,
          label: "n/a",
        },
        {
          id: 247,
          label: "n/a",
        },
        {
          id: 248,
          label: "n/a",
        },
        {
          id: 249,
          label: "n/a",
        },
        {
          id: 250,
          label: "n/a",
        },
        {
          id: 251,
          label: "n/a",
        },
        {
          id: 252,
          label: "n/a",
        },
        {
          id: 253,
          label: "n/a",
        },
        {
          id: 254,
          label: "n/a",
        },
      ],
    },
    {
      id: 17,
      columns: [
        {
          id: 255,
          label: "download",
        },
        {
          id: 256,
          label: "RORLN3J4N",
        },
        {
          id: 257,
          label: "2024-01-15T09:31:00Z",
        },
        {
          id: 258,
          label: "n/a",
        },
        {
          id: 259,
          label: "n/a",
        },
        {
          id: 260,
          label: "n/a",
        },
        {
          id: 261,
          label: "n/a",
        },
        {
          id: 262,
          label: "n/a",
        },
        {
          id: 263,
          label: "n/a",
        },
        {
          id: 264,
          label: "n/a",
        },
        {
          id: 265,
          label: "n/a",
        },
        {
          id: 266,
          label: "n/a",
        },
        {
          id: 267,
          label: "n/a",
        },
        {
          id: 268,
          label: "n/a",
        },
        {
          id: 269,
          label: "n/a",
        },
      ],
    },
    {
      id: 18,
      columns: [
        {
          id: 270,
          label: "download",
        },
        {
          id: 271,
          label: "SPSMO4K5O",
        },
        {
          id: 272,
          label: "2024-01-15T09:31:00Z",
        },
        {
          id: 273,
          label: "n/a",
        },
        {
          id: 274,
          label: "n/a",
        },
        {
          id: 275,
          label: "n/a",
        },
        {
          id: 276,
          label: "n/a",
        },
        {
          id: 277,
          label: "n/a",
        },
        {
          id: 278,
          label: "n/a",
        },
        {
          id: 279,
          label: "n/a",
        },
        {
          id: 280,
          label: "n/a",
        },
        {
          id: 281,
          label: "n/a",
        },
        {
          id: 282,
          label: "n/a",
        },
        {
          id: 283,
          label: "n/a",
        },
        {
          id: 284,
          label: "n/a",
        },
      ],
    },
    {
      id: 19,
      columns: [
        {
          id: 285,
          label: "download",
        },
        {
          id: 286,
          label: "TQTNP5L6P",
        },
        {
          id: 287,
          label: "2024-01-15T09:31:00Z",
        },
        {
          id: 288,
          label: "n/a",
        },
        {
          id: 289,
          label: "n/a",
        },
        {
          id: 290,
          label: "n/a",
        },
        {
          id: 291,
          label: "n/a",
        },
        {
          id: 292,
          label: "n/a",
        },
        {
          id: 293,
          label: "n/a",
        },
        {
          id: 294,
          label: "n/a",
        },
        {
          id: 295,
          label: "n/a",
        },
        {
          id: 296,
          label: "n/a",
        },
        {
          id: 297,
          label: "n/a",
        },
        {
          id: 298,
          label: "n/a",
        },
        {
          id: 299,
          label: "n/a",
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
