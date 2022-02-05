var puppeteer = require("puppeteer")
var path = require("path")
var fs = require("fs")
var dayjs = require("dayjs")

const filename = `resume-${dayjs().format("MMM-D-YY").toLowerCase()}.pdf`

const localURL = "http://localhost:9090"
const exportFolder = path.resolve(process.cwd(), "doc")
const exportPath = path.resolve(exportFolder, filename)

async function exportPDF() {
  if (!fs.existsSync(exportFolder)) {
    console.log("doc folder does not exist. creating folder")
    fs.mkdirSync(exportFolder)
  }
  console.log("Exporting resume to PDF")
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(localURL, {
    waitUntil: "networkidle2",
  })

  console.log("Generating PDF")
  const pdfStream = await page.createPDFStream({
    displayHeaderFooter: false,
    printBackground: true,
    format: "a4",
    margin: {
      top: 5,
      bottom: 5,
      left: 10,
      right: 10,
    },
  })
  const writeStream = fs.createWriteStream(exportPath)

  pdfStream.pipe(writeStream)
  pdfStream.on("end", async () => {
    console.log("Successfully generated PDF")
    await browser.close()
  })
}

;(() => exportPDF())()
