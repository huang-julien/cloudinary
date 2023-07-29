# CldUploadButton.vue

---

The CldUploadButton creates a button element that uses an instance of the [Cloudinary Upload Widget](https://cloudinary.com/documentation/upload_widget) to give you an easy way to add upload capabilities to your Next.js app.

The CldUploadButton component wraps the [CldUploadWidget](/components/clduploadwidget) component providing a pre-defined UI (a button). The same concepts apply, including having the option of using Signed or Unsigned uploads.

## Basic Usage

```html
<CldUploadButton uploadPreset="<Upload Preset>">Upload</CldUploadButton>
```

:upload-button