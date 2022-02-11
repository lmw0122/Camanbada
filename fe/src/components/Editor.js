import React, { useState, useMemo } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Editor() {
	function imageHandler() {
		//input 파일 태그 생성
		const input = document.createElement('input');
		input.setAttribute('type', 'file');
		input.setAttribute('accept', 'image/*')
		input.click();

		// input change
		input.onChange = (e) => {
			const files = e.target.files;
			const formData = new FormData();
			formData.append('files', files[0])

		//file 등록
		const api = 'i6c109.p.ssafy.io:8051/board';
		const tempFile = api.file.postTempFileUp(formData);
		tempFile.then((res) => {
			const fileSrno = res.fileSrno;
			const range = this.quill.getSelection();

			this.quill.insertEmbed(range.index, 'image', 'i6c109.p.ssafy.io:8000/board' + fileSrno)
		});
	}}

	const [value, setValue] = useState('');

	const modules = useMemo(()=> ({
		toolbar: {
			container : [
				["bold", "italic", "underline", "strike", "blockquote"],
          [{ size: ["small", false, "large", "huge"] }, { color: [] }],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
            { align: [] },
          ],
          ["image", "video"],
        ],
        handlers: {
          image: imageHandler,
        },
		}
	}), [])
	return (
		<div style={{ height : "650px", marginTop : 18, width : "600px", align : "center"}}>
			<ReactQuill
				style={{ height : "600px"}}
				theme="snow"
				value={value}
				modules={modules}
				onChange={setValue}
			/>
		</div>
  );
}