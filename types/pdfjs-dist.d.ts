declare module 'pdfjs-dist/build/pdf.mjs' {
  export interface PDFDocumentProxy {
    getPage(pageNumber: number): Promise<PDFPageProxy>;
    numPages: number;
  }

  export interface PDFPageProxy {
    getViewport(params: { scale: number }): PDFPageViewport;
    render(params: { canvasContext: CanvasRenderingContext2D; viewport: PDFPageViewport }): { promise: Promise<void> };
  }

  export interface PDFPageViewport {
    width: number;
    height: number;
  }

  export interface GlobalWorkerOptions {
    workerSrc: string;
  }

  export const GlobalWorkerOptions: GlobalWorkerOptions;

  export function getDocument(params: { data: ArrayBuffer }): { promise: Promise<PDFDocumentProxy> };
}

declare module 'pdfjs-dist/build/pdf.worker.min.mjs?url' {
  const workerUrl: string;
  export default workerUrl;
}
