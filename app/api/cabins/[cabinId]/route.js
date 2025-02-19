export async function GET(request,{params}){
   console.log(request)
   console.log(params)
   return Response.json({test:"test"})
}