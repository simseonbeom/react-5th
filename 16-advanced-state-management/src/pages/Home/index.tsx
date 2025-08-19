import AppLink from "@/components/AppLink"
import Divider from "@/components/Divider"
import Counter_ from "@/miniApp/Counter/index_"
// import { Helmet } from "react-helmet"
import { Helmet } from "@dr.pogodin/react-helmet"



// eslint-disable-next-line @typescript-eslint/no-unused-vars
const htmlTag = (
  <>
    <title>앱 글로벌 상태 관리 with Zustand</title>
    <meta 
      name="description"
      content="Zustand를 사용하면 Context, useReducer, useState 없이 보다 효과적으로, 더 빠르게, 더 가볍게 상태를 관리할 수 있습니다."
    />
    <meta property="og:title" content="범쌤과 함께 배우는 Zustand" />
    <meta property="twitter:title" content="범쌤과 함께 배우는 Zustand" />
    <meta property="og:type" content="site" />
    <meta property="og:url" content="https://github.com/simseonbeom" />
    <meta 
      property="og:description"
      content="Front-end 개발자를 꿈꾸는 자들이여 범쌤에게 오라!"
    />
    <meta 
      property="og:image"
      content="https://avatars.githubusercontent.com/u/35365227?v=4"
    />
    <meta property="og:site:author" content="범쌤(kindtiger)"/>
  </>
)


const helmetTag = (
  <Helmet>
    <title>앱 글로벌 상태 관리 with Zustand</title>
    <meta 
      name="description"
      content="Zustand를 사용하면 Context, useReducer, useState 없이 보다 효과적으로, 더 빠르게, 더 가볍게 상태를 관리할 수 있습니다."
    />
    <meta property="og:title" content="범쌤과 함께 배우는 Zustand" />
    <meta property="twitter:title" content="범쌤과 함께 배우는 Zustand" />
    <meta property="og:type" content="site" />
    <meta property="og:url" content="https://github.com/simseonbeom" />
    <meta 
      property="og:description"
      content="Front-end 개발자를 꿈꾸는 자들이여 범쌤에게 오라!"
    />
    <meta 
      property="og:image"
      content="https://avatars.githubusercontent.com/u/35365227?v=4"
    />
    <meta property="og:site:author" content="범쌤(kindtiger)"/>
  </Helmet>
)


function Home() {
  return (
    <>
      { helmetTag }
      {/* { htmlTag } */}
      <section id="page">
        <div className="learn">
          <h1>앱 글로벌 상태 관리 with Zustand</h1>
          <p>
            <AppLink
              href="https://zustand.docs.pmnd.rs/getting-started/introduction"
              isExternal
              className='text-red-500'
            >Zustand</AppLink> {' '}
            라이브러리를 사용해 앱 또는 컴포넌트의 상태를 효과적으로 관리하는 방법을 학습합니다.
          </p>

          <Divider />
          
          <h2>Counter</h2>
          <p>간단한 카운터 앱의 상태를 CustomHook을 사용해 관리합니다.</p>

          <Counter_/>

        </div>
      </section>
    </>
  )
}

export default Home