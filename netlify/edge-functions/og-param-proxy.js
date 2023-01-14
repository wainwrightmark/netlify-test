export default async (request, context) => {
    const url = new URL(request.url)
    
    // Get the page content.
    const response = await context.next()
    const page = await response.text()
    
    const search = 'test site'
    const replace = `${url.searchParams.toString()}`
    
    return new Response(page.replaceAll(search, replace), response);
}