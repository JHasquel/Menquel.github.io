const NOME_DA_ABA = 'Respostas Menquel';

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({
      sucesso: true,
      mensagem: 'API do formulario online.'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      throw new Error('Nenhum dado foi recebido pelo formulario.');
    }

    const dados = JSON.parse(e.postData.contents);
    const planilha = SpreadsheetApp
      .getActiveSpreadsheet()
      .getSheetByName(NOME_DA_ABA);

    if (!planilha) {
      throw new Error(`A aba "${NOME_DA_ABA}" nao foi encontrada.`);
    }

    planilha.appendRow([
      new Date(),
      dados.nome || '',
      dados.contato || '',
      dados.mensagem || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ sucesso: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (erro) {
    return ContentService
      .createTextOutput(JSON.stringify({
        sucesso: false,
        erro: erro.message
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}