
export default function ({ $auth, redirect }) {
  //Check if topic has been registered
  console.log($auth.$state.user.station)
  if($auth.$state.user.station[0]==null){
    return redirect('/user')
  }
}