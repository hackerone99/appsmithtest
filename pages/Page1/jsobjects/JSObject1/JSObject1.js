export default {
	myVar1: [],
	myVar2: {},
	myFun1: () => {
		const asd = true;

		return asd
	},
	
	 createWorkbook: async() => {

   const workbook = new ExcelJS.Workbook();

   workbook.creator = 'Tomato';
   workbook.lastModifiedBy = 'Tomato';
   workbook.created = new Date();
   workbook.modified = new Date();
   workbook.calcProperties.fullCalcOnLoad = true;

   const worksheet = workbook.addWorksheet('Tomato page 1', {
      properties: {tabColor: {argb: '#FF0000'}},
      pageSetup: {paperSize: 9, orientation: 'landscape'}
    });

   worksheet.getCell('A1').value = 'Hello, World!';
   worksheet.getCell('B1').value = 'What time is it?';
   worksheet.getCell('A2').value = 7;
   worksheet.getCell('B2').value = '12pm';

   const buf = await workbook.xlsx.writeBuffer();
   const blob = new Blob([buf], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
   const url = URL.createObjectURL(blob);

   await download(
            url, 
            "test.xls",
        );
    }
}