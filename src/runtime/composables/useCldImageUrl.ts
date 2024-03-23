import { useRuntimeConfig } from '#imports'
import { constructCloudinaryUrl, ConstructUrlProps } from '@cloudinary-util/url-loader'
import nuxtPkg from 'nuxt/package.json';
import pkg from '../../../package.json'

export const useCldImageUrl = (props: ConstructUrlProps) => {
  if (!props.options.src) console.error("`[@nuxtjs/cloudinary]`: Property `src` is missing")

  const cldCloudName = props.config?.cloud?.cloudName || useRuntimeConfig().public.cloudinary.cloudName
  const config = props.config || useRuntimeConfig().public.cloudinary.config

  if (!cldCloudName) console.warn('`[@nuxtjs/cloudinary]` Environment variable `CLOUDINARY_CLOUD_NAME` or property `cloudinary.cloudName` missing')

  let cldOptions: ConstructUrlProps = {
    options: {
      // Have to spread the options because otherwise getting the error about props being updated while they are readonly.
      ...props.options
    },
    config: {
      ...config,
      cloud: {
        cloudName: cldCloudName
      }
    },
    analytics: false
  }

  if (useRuntimeConfig().public.cloudinary.analytics) {
    cldOptions = {
      ...cldOptions,
      analytics: Object.assign({
        sdkCode: 'D',
        sdkSemver: `${pkg.version.split('.')[0]}.0.0`,
        techVersion: `${nuxtPkg.version.split('.')[0]}.0.0`,
        product: 'B'
      }, props.analytics)
    }
  }

  return {
    url: constructCloudinaryUrl(cldOptions)
  }
}
