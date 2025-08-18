import Container from '@/components/layout/Container'
import CardTools from '@/components/ToolCard'
                          
const toolsData = [
  {
    id: "01",
    toolName: "Chat",
    description: "laksjdkfj asldkjflksajdf alsdkfjkljasdf alsdkjflksajdf kasjdfkjsdf",
    feature: "privacy",
  },
  {
    id: "02",
    toolName: "Transcribe",
    description: "laksjdkfj asldkjflksajdf alsdkfjkljasdf alsdkjflksajdf kasjdfkjsdf",
    feature: "privacy",
  },
  {
    id: "03",
    toolName: "Bg Remover",
    description: "laksjdkfj asldkjflksajdf alsdkfjkljasdf alsdkjflksajdf kasjdfkjsdf",
    feature: "privacy",
  },
  {
    id: "04",
    toolName: "Bg Remover",
    description: "laksjdkfj asldkjflksajdf alsdkfjkljasdf alsdkjflksajdf kasjdfkjsdf",
    feature: "privacy",
  },

]

const Home = () => {
  return (
    <Container>
      <div className='flex flex-col justify-center items-center p-4 relative overflow-auto '>
        <div className='w-auto bg-black neu flex justify-center items-center py-2 px-8 mb-10'>
          <h1 className='font-bold text-4xl text-yellow-300'>
            LOCAL AI PLAYGROUND
          </h1>
        </div>
        <div className='max-w-[650px] bg-white neu flex justify-center items-center py-2 px-4 mb-10'>
          <p className='font-semibold text-[12px] text-center text-black'>
            On this page you'll find free, private AI tools that run entirely in your browser - and even offline!
          </p>
        </div>
        <div className='grid w-full gap-4 justify-items-center grid-cols-1 md:grid-cols-2'>
          {toolsData.map((toolsData) => (
            <CardTools id={`Tool ${toolsData.id}`} toolName={toolsData.toolName} description={toolsData.description} features={toolsData.feature} />
          )
          )}
        </div>

      </div >
    </Container >
  )
}

export default Home