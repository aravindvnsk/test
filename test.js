import java.io.File;
import java.io.FileInputStream;
import java.util.HashMap;
import java.util.Map;

import org.apache.poi.sl.usermodel.*;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class readdata {

	public static void main(String[] args) {
		String[] FamilyReportList = { "Area", "Location", "Country", "Zip Code", "Name", "Age", "Sex", "Height" };
		readExcelData(FamilyReportList, "FamilyReport");

	}

	public static Map<String,String> readExcelData(String[] list, String typeOfList) {
		Map<String,String> valuesSet = new HashMap<String, String>();
		try {
			File file = new File("C:\\Users\\Aravind\\Desktop\\mydata.xlsx");
			FileInputStream inputStream = new FileInputStream(file);
			@SuppressWarnings("resource")
			Workbook workbook = new XSSFWorkbook(inputStream);
			org.apache.poi.ss.usermodel.Sheet sheet = workbook.getSheet("Sheet1");
			int columnIndex = 0;

			for(int a=1;a<sheet.getRow(0).getLastCellNum();a++){
				if(sheet.getRow(0).getCell(a).getStringCellValue().equals(typeOfList))
					columnIndex = a;
			}
			
			for(int b=1; b<sheet.getLastRowNum();b++){
				for(String label : list){
					if(sheet.getRow(b).getCell(0).getStringCellValue().equals(label)){
						valuesSet.put(label, sheet.getRow(b).getCell(columnIndex).getStringCellValue());
					}
				}
				
			}
			System.out.println("test");
		} catch (Exception e) {
			System.out.println(e);
		}
		return valuesSet;

	}

}
