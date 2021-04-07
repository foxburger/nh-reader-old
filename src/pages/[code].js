import Image from 'next/image'
import Head from 'next/head'
import Nhentai from '../components/nhentai'
import styles from '../styles/Reader.module.css'

function Page({ metadata }) {
  if (metadata.content.status == 404){
    return (
      <>
        <h1>404 Not Found</h1>
      </>
    )
  } else {
    var imgUrl=[], i;
    for (i = 1; i < metadata.content.page; i++){
      imgUrl[i-1] = `/api/img/${metadata.content.media_id}/${i}.jpg`
    }
    return (
      <>
      <Head>
        <title>{metadata.content.title_en}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.metadata}>
          <p>{metadata.content.title_en}</p>
        </div>
        {imgUrl.map( (url, key) => 
            <div className={styles.img} key={key}>
              <Image 
                src={url}
                alt={url}
                layout="responsive"
                width={600}
                height={800}
                unoptimized>
              </Image>
            </div>
        )}
      </div>
      </>
    )
  }
}

export async function getServerSideProps({
  params: {
    code
  }
}) {
  const metadata = await Nhentai(code)
  if (metadata.status == 404) {
    return { notFound: true }
  } else {
    return { props: { metadata } }
  }
}

export default Page