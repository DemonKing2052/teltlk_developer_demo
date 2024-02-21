export function Init(e){return new Promise((n,t)=>{let i=uni.requireNativePlugin("TeltlkModule"),r=uni.getAppBaseInfo().appId;i.event({Init:{Url:e},UniappId:r},e=>{n(JSON.parse(e).data)})})};export function Authenticate(e,n,t){return new Promise((i,r)=>{let o=uni.requireNativePlugin("TeltlkModule"),a=uni.getAppBaseInfo().appId;o.event({Authenticate:{appID:e,nonce:n,sign:t},UniappId:a},e=>{i(JSON.parse(e).data)})})};export function IsFriend(e){return new Promise((n,t)=>{let i=uni.requireNativePlugin("TeltlkModule"),r=uni.getAppBaseInfo().appId;i.event({IsFriend:{friendOpenID:e},UniappId:r},e=>{n(JSON.parse(e).data)})})};export function AddFriend(e){return new Promise((n,t)=>{let i=uni.requireNativePlugin("TeltlkModule"),r=uni.getAppBaseInfo().appId;i.gotoNativePage({},e=>e),i.event({AddFriend:{friendOpenID:e},UniappId:r},e=>{n(JSON.parse(e).data)})})};export function IsGroupMember(e,n){return new Promise((t,i)=>{let r=uni.requireNativePlugin("TeltlkModule"),o=uni.getAppBaseInfo().appId;r.event({IsGroupMember:{groupID:e,OpenID:n},UniappId:o},e=>{t(JSON.parse(e).data)})})};export function GetGroupInfo(e){return new Promise((n,t)=>{let i=uni.requireNativePlugin("TeltlkModule"),r=uni.getAppBaseInfo().appId;i.event({GetGroupInfo:{gidList:e},UniappId:r},e=>{n(JSON.parse(e).data)})})};export function CreateGroup(e,n){return new Promise((t,i)=>{let r=uni.requireNativePlugin("TeltlkModule"),o=uni.getAppBaseInfo().appId;r.event({CreateGroup:{groupName:e,userId:n},UniappId:o},e=>{t(JSON.parse(e).data)})})};export function JoinGroup(e){return new Promise((n,t)=>{let i=uni.requireNativePlugin("TeltlkModule"),r=uni.getAppBaseInfo().appId;i.gotoNativePage({},e=>e),i.event({JoinGroup:{groupID:e},UniappId:r},e=>{n(JSON.parse(e).data)})})};export function DoPay(e,n,t,i,r){return new Promise((o,a)=>{let p=uni.requireNativePlugin("TeltlkModule"),u=uni.getAppBaseInfo().appId;p.gotoNativePage({},e=>e),p.event({DoPay:{appID:e,orderID:n,currencyID:t,amount:i,callbackUrl:r},UniappId:u},e=>{o(JSON.parse(e).data)})})};export function gotoNativePage(){uni.requireNativePlugin("TeltlkModule").gotoNativePage({},e=>e)};export function CloseOfficial(e){uni.requireNativePlugin("TeltlkModule").event({CloseOfficial:{appID:e}},e=>e)};export default{Init:Init,Authenticate:Authenticate,IsFriend:IsFriend,AddFriend:AddFriend,IsGroupMember:IsGroupMember,JoinGroup:JoinGroup,gotoNativePage:gotoNativePage,GetGroupInfo:GetGroupInfo,CreateGroup:CreateGroup,DoPay:DoPay,CloseOfficial:CloseOfficial};