# watch( 'css/bootstrap.min.css' )  {scpCopy("vimpeln.min.css", "scp css/bootstrap.min.css samar@samarpanda.com://var/www/vimpeln/vimpeln.bombayworks.eu/www/css/vimpeln.min.css") }
# watch( 'js/script.js' )  {|md| scpCopy("script.js", "scp js/script.js samar@samarpanda.com:/var/www/vimpeln/vimpeln.bombayworks.eu/www/js/script.js") }
# watch( 'js/plugins.js' )  {|md| scpCopy("plugins.js", "scp js/plugins.js samar@samarpanda.com:/var/www/vimpeln/vimpeln.bombayworks.eu/www/js/plugins.js") }
# watch( 'images/.*\.png' )  {|md| scpCopy("#{md[0]}" ,"scp #{md[0]} samar@samarpanda.com:/var/www/vimpeln/vimpeln.bombayworks.eu/www/#{md[0]}") }

def scpCopy (file, cmd)
    # system 'growlnotify -m "Uploading - ' + file + '"'
	system 'notify-send "Uploading - ' + file + '" -t 500'
    print "Copying file..."; STDOUT.flush
    system cmd
    system 'date'
    # system 'growlnotify -m "Uploaded - ' + file + '"'
	system 'notify-send "Uploaded - ' + file + '" -t 500'
    print "Done\n"
end

def compress(file, outputfile)
    # system 'growlnotify -m "Compressing - ' + file + '"'
    system 'notify-send "Compressing - ' + file + '" -t 500'
    system 'java -jar ~/compiler.jar --js ' + file + ' --js_output_file ' + outputfile
    system 'notify-send "Compressed - ' + outputfile + '" -t 500'
    # system 'growlnotify -m "Compressed - ' + outputfile + '"'
end