The facility for which I think “bind” is appropriate is the syncing of values between properties in the view with properties in the view-model. In that usage, the refinement of that concept of binding as “one-way,”  “two-way,” “one-time,” etc. is easy to understand.

The use of the word “bind” for conditional or repetitive rendering seems inappropriate to me; it is a different concept. In the case of rendering, please consider using one of the following terms instead of "bind." 

*	render.if=”…”
*	render.elseif=”…”
*	render.else=”…”
*	render.for= "friend of friends" (…no need for the word “repeat;” it is clearly implied)
*	etc.

You have life-cycle hooks **beforeAttach** and **afterAttach**, so “attach” would also be consistent:

*	attach.if=”…”
*	attach.elseif=”…”
*	attach.else=”…”
*	attach.for= "friend of friends" (…no need for the word “repeat;” it is clearly implied)
*	etc.

Early in my learning phase, use of “bind” for both syncing and rendering was confusing. Now that I know the difference, it is not confusing. But the lack of distinction is distasteful and unnecessarily muddies the water. 

