import XLSX from "xlsx";

export class ExcelReader {

  constructor(filePath) {

    this.workbook = XLSX.readFile(filePath);

  }

  getExcelData(sheetName, testCase) {

    const worksheet = this.workbook.Sheets[sheetName];

    const data = XLSX.utils.sheet_to_json(worksheet);

    const row = data.find((row) => row.testCase === testCase);

    // Convert Excel serial date to yyyy-mm-dd

    if (row?.ExpectedCloseDate) {

      const date = XLSX.SSF.parse_date_code(row.ExpectedCloseDate);

      row.ExpectedCloseDate = `${date.y}-${String(date.m).padStart(2, "0")}-${String(date.d).padStart(2, "0")}`;

    }

    return row;

  }

}
