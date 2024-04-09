import { ReadStream } from 'fs';
import { Metadata, PdfFormat } from '../../common';

type FileExtension =
    | '123'
    | '602'
    | 'abw'
    | 'bib'
    | 'bmp'
    | 'cdr'
    | 'cgm'
    | 'cmx'
    | 'csv'
    | 'cwk'
    | 'dbf'
    | 'dif'
    | 'doc'
    | 'docm'
    | 'docx'
    | 'dot'
    | 'dotm'
    | 'dotx'
    | 'dxf'
    | 'emf'
    | 'eps'
    | 'epub'
    | 'fodg'
    | 'fodp'
    | 'fods'
    | 'fodt'
    | 'fopd'
    | 'gif'
    | 'htm'
    | 'html'
    | 'hwp'
    | 'jpeg'
    | 'jpg'
    | 'key'
    | 'ltx'
    | 'lwp'
    | 'mcw'
    | 'met'
    | 'mml'
    | 'mw'
    | 'numbers'
    | 'odd'
    | 'odg'
    | 'odm'
    | 'odp'
    | 'ods'
    | 'odt'
    | 'otg'
    | 'oth'
    | 'otp'
    | 'ots'
    | 'ott'
    | 'pages'
    | 'pbm'
    | 'pcd'
    | 'pct'
    | 'pcx'
    | 'pdb'
    | 'pdf'
    | 'pgm'
    | 'png'
    | 'pot'
    | 'potm'
    | 'potx'
    | 'ppm'
    | 'pps'
    | 'ppt'
    | 'pptm'
    | 'pptx'
    | 'psd'
    | 'psw'
    | 'pub'
    | 'pwp'
    | 'pxl'
    | 'ras'
    | 'rtf'
    | 'sda'
    | 'sdc'
    | 'sdd'
    | 'sdp'
    | 'sdw'
    | 'sgl'
    | 'slk'
    | 'smf'
    | 'stc'
    | 'std'
    | 'sti'
    | 'stw'
    | 'svg'
    | 'svm'
    | 'swf'
    | 'sxc'
    | 'sxd'
    | 'sxg'
    | 'sxi'
    | 'sxm'
    | 'sxw'
    | 'tga'
    | 'tif'
    | 'tiff'
    | 'txt'
    | 'uof'
    | 'uop'
    | 'uos'
    | 'uot'
    | 'vdx'
    | 'vor'
    | 'vsd'
    | 'vsdm'
    | 'vsdx'
    | 'wb2'
    | 'wk1'
    | 'wks'
    | 'wmf'
    | 'wpd'
    | 'wpg'
    | 'wps'
    | 'xbm'
    | 'xhtml'
    | 'xls'
    | 'xlsb'
    | 'xlsm'
    | 'xlsx'
    | 'xlt'
    | 'xltm'
    | 'xltx'
    | 'xlw'
    | 'xml'
    | 'xpm'
    | 'zabw';

type FileInfo = {
    data: Buffer | ReadStream;
    ext: FileExtension;
};

export type PathLikeOrReadStream = string | FileInfo;

export type PageProperties = {
    landscape?: boolean; // Set the paper orientation to landscape (default false)
    nativePageRanges?: { from: number; to: number }; // Page ranges to print
    exportFormFields?: boolean; // Set whether to export the form fields or to use the inputted/selected content of the fields (default true)
};

export type ConversionOptions = {
    properties?: PageProperties;
    merge?: boolean;
    pdfa?: PdfFormat;
    pdfUA?: boolean;
    metadata?: Metadata;
};
