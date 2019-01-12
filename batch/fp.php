<?php
$sessionid='d4yruhcxufk1svl0f718kewqnn8a5wx0';
$csrftoken='iPoE7KdnarhDH5pQxJb5oMGYJVHLLWee6yILwZVni1SKxqlhOZPj6CeDp8ltePgk';
$gold = '2.39789574E+43';
$shards = '3570630148';
$gems = '3';
$essence = '3';
$strength_res = '0';
$charisma_res = '0';
$intelligence_res = '0';
$luck_res = '0';
$uniqueSid='6jadaq6cibjabe38ouh5k4834ag44ut2';

function send20Kills($ch) {
    global $uniqueSid;
    $pedido = createMethod('battle.monsterKilled', createMonsterArgs());
    $pedido['batch'] = [];
    for ($i=0; $i<50; $i++) {
        $pedido['batch'][] = createMethod('battle.monsterKilled', createMonsterArgs());
    }
    $pedido["uniqueSid"]=$uniqueSid;
    $dados=json_encode($pedido);
    curl_setopt($ch, CURLOPT_POSTFIELDS, 'data='.urlencode($dados));
    print "Resultado: ".curl_exec($ch);
}

function send20Clicks($ch) {
    global $uniqueSid,$gold;
    $pedido = createMethod('battle.clicks', ['clicks'=>3120, 'locationId'=>333, 'reward'=>['res'=>["gold"=>['__dec__'=>1, 'val'=>'9.5553248E+46']]]]);
    $pedido['batch'] = [];
    for ($i=0; $i<200; $i++) {
        $pedido['batch'][] = createMethod('battle.clicks', ['clicks'=>3120, 'locationId'=>333, 'reward'=>['res'=>["gold"=>['__dec__'=>1, 'val'=>'9.5553248E+46']]]]);
    }
    $pedido["uniqueSid"]=$uniqueSid;
    $dados=json_encode($pedido);
    curl_setopt($ch, CURLOPT_POSTFIELDS, 'data='.urlencode($dados));
    print "Resultado: ".curl_exec($ch);
}

function sendnStatsBuy($ch, $n) {
    global $uniqueSid;
    $pedido = createMethod('user.stats.buy', ['name'=>'strength']);
    $pedido['batch'] = [];
    for ($i=0; $i<$n-1; $i++) {
        $pedido['batch'][] = createMethod('user.stats.buy', ['name'=>'strength']);
    }
/*    for ($i=0; $i<$n; $i++) {
        $pedido['batch'][] = createMethod('user.stats.buy', ['name'=>'charisma']);
    }
    for ($i=0; $i<$n; $i++) {
        $pedido['batch'][] = createMethod('user.stats.buy', ['name'=>'intelligence']);
    }
/*     for ($i=0; $i<100; $i++) {
         $pedido['batch'][] = createMethod('user.stats.buy', ['name'=>'luck']);
     }*/
    $pedido["uniqueSid"]=$uniqueSid;
    $dados=json_encode($pedido);
    curl_setopt($ch, CURLOPT_POSTFIELDS, 'data='.urlencode($dados));
    print "Resultado: ".curl_exec($ch);
}
function send100LuckBuy($ch) {
    global $uniqueSid;
    $pedido = createMethod('user.stats.buy', ['name'=>'luck']);
    $pedido['batch'] = [];
    for ($i=0; $i<100; $i++) {
         $pedido['batch'][] = createMethod('user.stats.buy', ['name'=>'luck']);
    }
    $pedido["uniqueSid"]=$uniqueSid;
    $dados=json_encode($pedido);
    curl_setopt($ch, CURLOPT_POSTFIELDS, 'data='.urlencode($dados));
    print "Resultado: ".curl_exec($ch);
}

function createMethod($nome, $args) {
    return ["method"=>$nome, "args"=>$args];
}

function createMonsterArgs(){
    global $gold, $shards, $gems, $essence, $strength_res, $charisma_res, $intelligence_res, $luck_res;
    return ["gameTime"=>3714435240 + rand(0,10000),
            "reward"=>['res'=>['gold'=>['__dec__'=>1, 'val'=>$gold],
                               'shards'=>['__dec__'=>1, 'val'=>$shards],
                               'gems'=>['__dec__'=>1, 'val'=>$gems],
                               'essence'=>['__dec__'=>1, 'val'=>$essence],
                               "strength_res"=>['__dec__'=>1, 'val'=>$strength_res],
                               "charisma_res"=>['__dec__'=>1, 'val'=>$charisma_res],
                               "intelligence_res"=>['__dec__'=>1, 'val'=>$intelligence_res],
                               "luck_res"=>['__dec__'=>1, 'val'=>$luck_res], "crowns"=>['__dec__'=>1, 'val'=>'0'], "keys"=>['__dec__'=>1, 'val'=>'0']]],
            "clicks"=>1,
            "clicsInSec"=>['__dec__'=>1, 'val'=>1],
            "critClicks"=>0,
            "skillDamage"=>0];
}

/*data={"method":"user.stats.buy","args":{"name":"intelligence"},"batch":[{"method":"battle.monsterKilled","args":{"gameTime":5804437313,"reward":{"res":{"gold":{"__dec__":1,"val":"3.23263348e+41"},"shards":{"__dec__":1,"val":"1803410790"},"gems":{"__dec__":1,"val":"0"},"essence":{"__dec__":1,"val":"0"},"strength_res":{"__dec__":1,"val":"0"},"charisma_res":{"__dec__":1,"val":"0"},"intelligence_res":{"__dec__":1,"val":"0"}}},"clicks":9,"clicsInSec":{"__dec__":1,"val":"227"},"critClicks":0,"skillDamage":0}}],"uniqueSid":"ecade87lxlz0epbx9jla0xesfc3er64y"}*/

$ch = curl_init();
curl_setopt_array($ch, 
    array(CURLOPT_URL => 'http://faptitans.com/api/',
    CURLOPT_POST => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_COOKIE => "Cookie: cook=2pv6f3tuxx9b9be6ptqx7pthv5n592vh; csrftoken={$csrftoken}; amplitude_idfaptitans.com=eyJkZXZpY2VJZCI6Ijg3N2I4Nzg4LWYwZTktNDBhOC04M2RjLTA4OWE4MjkxZjBkZFIiLCJ1c2VySWQiOiIzMjcyOTk0NCIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTUwMTQ0OTgzMzQ2MSwibGFzdEV2ZW50VGltZSI6MTUwMTQ0OTg4MTE0OSwiZXZlbnRJZCI6Mzg2NywiaWRlbnRpZnlJZCI6OTY1LCJzZXF1ZW5jZU51bWJlciI6NDgzMn0=; sessionid={$sessionid}",
    CURLOPT_REFERER => 'http://faptitans.com/',
    CURLOPT_USERAGENT=>'Mozilla/5.0 (X11; Linux x86_64; rv:54.0) Gecko/20100101 Firefox/54.0',
    CURLOPT_HTTPHEADER=>['Content-Type: application/x-www-form-urlencoded; charset=UTF-8',"X-CSRFToken: {$csrftoken}",'X-Requested-With: XMLHttpRequest','Pragma: no-cache','Cache-Control: no-cache'],
    CURLOPT_VERBOSE=>false));

switch($argv[1]) {
    case '1': 
        for ($i=0; $i< 300; $i++) {
            print "$i ";
            send20Kills($ch);
            print "\n";
        }
        break;
    case '2':
      for ($i=0; $i< 100; $i++) {
        print "$i ";
        send20Clicks($ch);
        print "\n";
      }  
      break;
    case '3':
      sendnStatsBuy($ch,25);
      print "\n";
      break;
    default:
        $pedido = createMethod('super.chest.quest.buy', ['_id'=>3]);
        /*$pedido = createMethod('misc.dailyquest.claim',[]);
        $pedido['batch'] = [];
        for ($i=0; $i<10; $i++) {
            $pedido['batch'][] = createMethod('misc.dailyquest.claim', []);
        }*/
        $pedido["uniqueSid"]=$uniqueSid;
        $dados=json_encode($pedido);
        curl_setopt($ch, CURLOPT_POSTFIELDS, 'data='.urlencode($dados));
        print "Resultado: ".curl_exec($ch);
        curl_close($ch);
        print "\n";
}

